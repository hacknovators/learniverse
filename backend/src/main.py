from typing import Optional, Annotated
from fastapi import FastAPI, Depends, Form, UploadFile
from sqlmodel import SQLModel, select, Field, Session
from .database import engine, db_session


app = FastAPI()


class Video(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    video: bytes


@app.on_event("startup")
def startup():
    SQLModel.metadata.create_all(engine)


@app.post("/video")
async def add_video(
    name: Annotated[str, Form()],
    desc: Annotated[str, Form()],
    video: UploadFile,
    session: Session = Depends(db_session),
):
    vid = Video(name=name, desc=desc, video=await video.read())
    session.add(vid)
    session.commit()
    session.refresh(vid)
    return {"id": vid.id}


@app.get("/video")
def list_videos(session: Session = Depends(db_session)):
    statement = select(Video.id, Video.name).limit(50)
    res = session.exec(statement).all()
    return [{"id": i.id, "name": i.name} for i in res]


@app.get("/video/{id}")
def get_video(id: int, session: Session = Depends(db_session)):
    statement = select(Video).where(Video.id == id)
    video = session.exec(statement).one()
    return {"data": str(video.video)}

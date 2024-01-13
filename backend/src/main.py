from typing import Optional
from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, select, Field, Session
from .database import engine, db_session


app = FastAPI()


class Video(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    
    


@app.on_event("startup")
def startup():
    SQLModel.metadata.create_all(engine)


@app.post("/video")
def add_video(name: str, desc: str, session: Session = Depends(db_session)):
    session.add(Video(name=name, desc=desc))
    session.commit()
    return {"status": "success"}


@app.get("/video")
def list_videos(session: Session = Depends(db_session)):
    statement = select(Video).limit(50)
    return session.exec(statement).all()


@app.get("/video/{id}")
def get_video(id: int, session: Session = Depends(db_session)):
    statement = select(Video).where(Video.id == id).limit(1)
    return session.exec(statement).all()[0]



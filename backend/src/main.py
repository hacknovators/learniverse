from typing import Optional, Annotated
from fastapi import FastAPI, Depends, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, select, Field, Session
from .database import engine, db_session

PAGE_SIZE = 20

origins = [
    "http://localhost"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


class Video(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    video: bytes


class Loan(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    url: str


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
def list_videos(page: int = 0, session: Session = Depends(db_session)):
    statement = select(Video.id, Video.name).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return [{"id": i.id, "name": i.name} for i in res]


@app.get("/video/{id}")
def get_video(id: int, session: Session = Depends(db_session)):
    statement = select(Video).where(Video.id == id)
    video = session.exec(statement).one()
    return {"data": str(video.video)}


@app.post("/loan")
def add_loan(name: str, desc: str, url: str, session: Session = Depends(db_session)):
    loan = Loan(name=name, desc=desc, url=url)
    session.add(loan)
    session.commit()
    session.refresh(loan)
    return {"id": loan.id}


@app.get("/loan")
def list_loans(page: int = 0, session: Session = Depends(db_session)):
    statement = select(Loan).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return res


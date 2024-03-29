from typing import Optional, Annotated
from fastapi import FastAPI, Depends, Form, UploadFile
from fastapi.responses import Response, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, select, Field, Session
from io import BytesIO
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
    std: int
    sub: str
    thumbnail: bytes
    video: bytes


class Loan(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    url: str


class Job(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    url: str


class Scholarship(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    desc: str
    url: str


class ChatMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    msg: str
    mentor: bool


@app.on_event("startup")
def startup():
    SQLModel.metadata.create_all(engine)


@app.post("/video")
async def add_video(
    name: Annotated[str, Form()],
    desc: Annotated[str, Form()],
    thumbnail: UploadFile,
    video: UploadFile,
    std: Annotated[int, Form()],
    sub: Annotated[str, Form()],
    session: Session = Depends(db_session),
):
    vid = Video(
        name=name,
        desc=desc,
        thumbnail=await thumbnail.read(),
        video=await video.read(),
        std=std,
        sub=sub,
    )
    session.add(vid)
    session.commit()
    session.refresh(vid)
    return {"id": vid.id}


@app.get("/video")
def list_videos(page: int = 0, std: str = None, sub: str = None, session: Session = Depends(db_session)):
    statement = select(Video.id, Video.name, Video.desc).where(Video.std == std).where((Video.sub == sub) if sub != "" else True).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return [{"id": i.id, "name": i.name, "desc": i.desc} for i in res]


@app.get("/video/{id}")
def get_video(id: int, session: Session = Depends(db_session)):
    statement = select(Video).where(Video.id == id)
    video = session.exec(statement).one()
    return Response(video.video, media_type="video/ogg")


@app.get("/svideo/{id}")
def get_streamed_video(id: int, session: Session = Depends(db_session)):
    statement = select(Video).where(Video.id == id)
    video = session.exec(statement).one()
    return StreamingResponse(BytesIO(video.video))


@app.get("/thumbnail/{id}")
def get_thumbnail(id: int, session: Session = Depends(db_session)):
    statement = select(Video.thumbnail).where(Video.id == id)
    thumbnail = session.exec(statement).one();
    return Response(thumbnail, media_type="image/png")


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


@app.post("/job")
def add_job(name: str, desc: str, url: str, session: Session = Depends(db_session)):
    job = Job(name=name, desc=desc, url=url)
    session.add(job)
    session.commit()
    session.refresh(job)
    return {"id": job.id}


@app.get("/job")
def list_jobs(page: int = 0, session: Session = Depends(db_session)):
    statement = select(Job).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return res


@app.post("/scholarship")
def add_scholarship(name: str, desc: str, url: str, session: Session = Depends(db_session)):
    scholarship = Scholarship(name=name, desc=desc, url=url)
    session.add(scholarship)
    session.commit()
    session.refresh(scholarship)
    return {"id": scholarship.id}


@app.get("/scholarship")
def list_scholarship(page: int = 0, session: Session = Depends(db_session)):
    statement = select(Scholarship).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return res


@app.post("/chat")
def add_chat(msg: str, mentor: bool, session: Session = Depends(db_session)):
    chat = ChatMessage(msg=msg, mentor=mentor)
    session.add(chat)
    session.commit()
    session.refresh(chat)
    return {"id": chat.id}


@app.get("/chat")
def list_chat(page: int = 0, session: Session = Depends(db_session)):
    statement = select(ChatMessage).offset(PAGE_SIZE * page).limit(PAGE_SIZE)
    res = session.exec(statement).all()
    return res

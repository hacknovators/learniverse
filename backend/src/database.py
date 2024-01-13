from sqlmodel import SQLModel, Session, create_engine


db_url = "sqlite:///database.db"
engine = create_engine(db_url, echo=True, connect_args={"check_same_thread": False})


async def db_session():
    with Session(engine) as session:
        yield session


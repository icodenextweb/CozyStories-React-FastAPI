from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# 1. The URL where the file will be created
SQLALCHEMY_DATABASE_URL = "sqlite:///./cozystories.db"

# 2. The Engine (the actual connection to the database)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# 3. The Base class (used later to create tables)
Base = declarative_base()
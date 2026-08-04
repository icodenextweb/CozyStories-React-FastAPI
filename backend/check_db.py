from sqlalchemy import Column, Integer, String, inspect
from database.connection import Base, engine

# --- STEP 1: Define a quick table ---
class Story(Base):
    __tablename__ = "stories"
    id = Column(Integer, primary_key=True)
    title = Column(String)


Base.metadata.create_all(bind=engine)


print("\n--- Inspecting Database ---")


inspector = inspect(engine)

# Get all table names
tables = inspector.get_table_names()
print(f"Tables found: {tables}")

# Loop through the tables to see their structure (columns)
for table in tables:
    print(f"\nStructure for table '{table}':")
    columns = inspector.get_columns(table)
    
    for col in columns:
        print(f" - Column Name: {col['name']}, Data Type: {col['type']}")
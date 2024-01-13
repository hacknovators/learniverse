## Backend

# Create and activate a venv environment
```sh
python3 -m venv venv
source venv/bin/activate
```

# Install all dependencies
```
pip install -r requirement.txt
```

# Run with hot reloading
```
uvicorn src.main:app --reload	
```

The API is now accessible at ``<host>:8000`` and OpenAPI interface/docs is available at ``<host>:8000/docs``

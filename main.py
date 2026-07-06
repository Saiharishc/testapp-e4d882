from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/test_data")
def get_test_data():
    return {"message": "This is sample test data."}

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import csv
import io
import requests

app = FastAPI(title="PureRoot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000",
                  "https://pureroot-psi.vercel.app",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GOOGLE_SHEET_URL = (
    "https://docs.google.com/spreadsheets/d/"
    "1utj_8qH8VRgZ6vRiaWJkLYHmoRO5jrcuI4UE43GeWQ4"
    "/gviz/tq?tqx=out:csv"
)


def get_products():
    response = requests.get(GOOGLE_SHEET_URL, timeout=10)
    response.raise_for_status()

    reader = csv.DictReader(io.StringIO(response.text))

    products = []

    for row in reader:
        product = {
            "id": int(row["id"]),
            "name": row["name"],
            "category": row["category"],
            "size": row["size"],
            "price": float(row["price"]),
            "rating": float(row["rating"]),
            "reviews": int(row["reviews"]),
            "badge": row["badge"],
            "image": row["image"],
            "description": row["description"],
            "ingredients": row["ingredients"],
            "benefits": row["benefits"],
        }

        products.append(product)

    return products


@app.get("/")
def root():
    return {
        "message": "PureRoot API is running"
    }


@app.get("/api/products")
def products():
    return get_products()


@app.get("/api/products/{product_id}")
def product(product_id: int):
    products = get_products()

    for item in products:
        if item["id"] == product_id:
            return item

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )

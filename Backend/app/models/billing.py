from sqlmodel import SQLModel, Field
from typing import Optional

class Billing(SQLModel, table=True):
    billing_id: Optional[int] = Field(default=None, primary_key=True)
    pharmacy_id: Optional[int] = Field(default=None, foreign_key="pharmacy.pharmacy_id")
    customer_name: str = Field(index=True)
    date: str
    total_amount: float
    paid_amount: float
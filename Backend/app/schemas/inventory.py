from pydantic import BaseModel
from typing import Optional

class InventoryBase(BaseModel):
    pharmacy_id: int
    drug_id: int
    quantity: int
    price_per_unit: float

class InventoryCreate(InventoryBase):
    pass

class InventoryRead(InventoryBase):
    inventory_id: int

    class Config:
        orm_mode = True
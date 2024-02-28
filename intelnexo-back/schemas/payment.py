from pydantic import BaseModel

class PaymentRequest(BaseModel):
    user_id: int
    cuenta_id: int
    monto: float

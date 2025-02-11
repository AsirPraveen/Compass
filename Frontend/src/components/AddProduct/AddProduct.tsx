import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Product } from "../../store/ProductStore"

const AddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit = (data: Product) => {
    console.log("Product Data:", data);
    toast.success("Product successfully added !!!");
    reset();
    window.scrollTo(0, 0);
  };

  return (
    <Container className="mt-2" style={{ height: "100%" }}>
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-center"><strong>ADD NEW PRODUCT</strong></h2>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: Apple iPhone 14 Pro" 
            {...register("title", { required: "Title is required" })} 
          />
          {errors.title && <span className="text-danger">{errors.title.message}</span>}
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder="Eg: Latest iPhone with A16 Bionic chip and 48MP camera" 
            {...register("description", { required: "Description is required" })} 
          />
          {errors.description && <span className="text-danger">{errors.description.message}</span>}
        </Form.Group>

        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            step="0.01" 
            placeholder="Eg: 999.99$" 
            {...register("price", { 
              required: "Price is required", 
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/, 
                message: "Invalid price format: round to 2 digits after dot"
              }
            })} 
          />
          {errors.price && <span className="text-danger">{errors.price.message}</span>}
        </Form.Group>

        <Form.Group controlId="stock" className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Eg: 50"  
            {...register("stock", { 
              required: "Stock is required", 
              pattern: {
                value: /^[1-9]\d*$/, 
                message: "Stock must be a positive integer"
              }
            })} 
          />
          {errors.stock && <span className="text-danger">{errors.stock.message}</span>}
        </Form.Group>

        <Form.Group controlId="brand" className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: Apple" 
            {...register("brand", { required: "Brand is required" })} 
          />
          {errors.brand && <span className="text-danger">{errors.brand.message}</span>}
        </Form.Group>

        <Form.Group controlId="category" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: Smartphones" 
            {...register("category", { required: "Category is required" })} 
          />
          {errors.category && <span className="text-danger">{errors.category.message}</span>}
        </Form.Group>

        <Form.Group controlId="sku" className="mb-3">
          <Form.Label>SKU</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: IP14PRO256GB" 
            {...register("sku", { 
              required: "SKU is required", 
              pattern: {
                value: /^[A-Za-z0-9\-]+$/, 
                message: "SKU must contain only alphanumeric characters or hyphens"
              }
            })} 
          />
          {errors.sku && <span className="text-danger">{errors.sku.message}</span>}
        </Form.Group>

        <Form.Group controlId="weight" className="mb-3">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control 
            type="number" 
            step="0.1" 
            placeholder="Eg: 0.3" 
            {...register("weight", { 
              required: "Weight is required",
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/, 
                message: "Invalid weight format: round to 1 digit after dot"
              }
            })}
          />
          {errors.weight && <span className="text-danger">{errors.weight.message}</span>}
        </Form.Group>

        <Form.Group controlId="warrantyInformation" className="mb-3">
          <Form.Label>Warranty</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: 1 Year Apple Warranty" 
            {...register("warrantyInformation", { required: "Warranty info is required" })} 
          />
          {errors.warrantyInformation && <span className="text-danger">{errors.warrantyInformation.message}</span>}
        </Form.Group>

        <Form.Group controlId="shippingInformation" className="mb-3">
          <Form.Label>Shipping Information</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: Ships within 3-5 business days" 
            {...register("shippingInformation", { required: "Shipping info is required" })} 
          />
          {errors.shippingInformation && <span className="text-danger">{errors.shippingInformation.message}</span>}
        </Form.Group>

        <Form.Group controlId="returnPolicy" className="mb-3">
          <Form.Label>Return Policy</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: 30-day return policy" 
            {...register("returnPolicy", { required: "Return policy is required" })} 
          />
          {errors.returnPolicy && <span className="text-danger">{errors.returnPolicy.message}</span>}
        </Form.Group>

        <Form.Group controlId="availabilityStatus" className="mb-3">
          <Form.Label>Availability Status</Form.Label>
          <Form.Select 
            {...register("availabilityStatus", { required: "Availability status is required" })}>
            <option value="">Select Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </Form.Select>
          {errors.availabilityStatus && <span className="text-danger">{errors.availabilityStatus.message}</span>}
        </Form.Group>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Product Images (comma-separated URLs)</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: https://example.com/image1.jpg" 
            {...register("images", { 
              required: "At least one image is required", 
              pattern: {
                value: /^(https?:\/\/[^\s]+(\.[^\s]{2,})+)(,\s*(https?:\/\/[^\s]+(\.[^\s]{2,})+))*$/, 
                message: "Images must be comma-separated URLs"
              }
            })} 
          />
          {errors.images && <span className="text-danger">{errors.images.message}</span>}
        </Form.Group>

        <Form.Group controlId="qrCode" className="mb-3">
          <Form.Label>QR Code Image URL</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Eg: https://example.com/qrcode.jpg" 
            {...register("meta.qrCode", { 
              required: "QR Code is required", 
              pattern: {
                value: /^(https?:\/\/[^\s]+(\.[^\s]{2,})+)$/, 
                message: "Invalid QR code URL format"
              }
            })} 
          />
          {errors.meta && errors.meta.qrCode && <span className="text-danger">{errors.meta.qrCode.message}</span>}
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="mb-5">
            Add Product
          </Button>
        </div>
      </Form>
      
    </Container>
  );
};

export default AddProduct;

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.enum';
import { Product } from 'src/app/interfaces/products.interface';
import { OrderManagerService } from 'src/app/service/order-manager.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private readonly orderService: OrderManagerService) {}

  addProductForm: FormGroup;
  latestProductId: number;
  products: Product[];

  categories: Category[] = [
    Category.BOOKS,
    Category.CLOTHING,
    Category.ELECTRONICS,
    Category.SPORTS,
  ];

  latestID() {
    if (this.products.length > 0) {
      const lastProduct = this.products[this.products.length - 1];
      this.latestProductId = lastProduct.id + 1;
    } else {
      this.latestProductId = 1;
    }
  }
  ngOnInit(): void {
    const lastProduct = this.orderService.allProducts.subscribe((data) => {
      this.products = data;
    });
    this.latestID();
    this.initForm();
  }

  initForm(): void {
    this.addProductForm = new FormGroup({
      productId: new FormControl(
        { value: this.latestProductId, disabled: true },
        [Validators.required]
      ),
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      productPrice: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
      productCategory: new FormControl('', [
        Validators.required,
        this.categoryCheck,
      ]),
      productStock: new FormControl('', [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  onFormSubmit(): void {
    const {
      productId,
      productName,
      productDescription,
      productPrice,
      productCategory,
      productStock,
    } = this.addProductForm.value;
    const createProduct: Product = {
      id: this.latestProductId,
      name: productName,
      description: productDescription,
      price: productPrice,
      category: productCategory,
      stock: productStock,
    };

    this.orderService.addProduct(createProduct);
    console.log(this.orderService._products);
    this.latestProductId++;

    this.addProductForm.reset({
      productId: { value: this.latestProductId, disabled: true },
    });
  }

  categoryCheck = (control: FormControl): { [key: string]: boolean } | null => {
    if (!this.categories.includes(control.value)) {
      return {
        invalidCategory: true,
      };
    }
    return null;
  };
}

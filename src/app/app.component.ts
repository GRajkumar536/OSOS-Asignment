import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Model } from './model'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = [
    { productId: 1, productQuantity: 1, productSubTotalPrice: 100, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 100, productDescription: "Description" },
    { productId: 2, productQuantity: 1, productSubTotalPrice: 150, productName: "def", isAddedtoCart: false, productImage: "/assets/images/unnamed.gif", productPrice: 150, productDescription: "Description" },
    { productId: 3, productQuantity: 1, productSubTotalPrice: 200, productName: "ghi", isAddedtoCart: false, productImage: "/assets/images/test2.jpg", productPrice: 200, productDescription: "Description" },
    { productId: 4, productQuantity: 1, productSubTotalPrice: 250, productName: "jkl", isAddedtoCart: false, productImage: "/assets/images/test4.jpg", productPrice: 250, productDescription: "Description" },
    { productId: 5, productQuantity: 1, productSubTotalPrice: 300, productName: "mno", isAddedtoCart: false, productImage: "/assets/images/test5.png", productPrice: 300, productDescription: "Description" },
    { productId: 6, productQuantity: 1, productSubTotalPrice: 350, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 350, productDescription: "Description" },
    { productId: 7, productQuantity: 1, productSubTotalPrice: 400, productName: "def", isAddedtoCart: false, productImage: "/assets/images/unnamed.gif", productPrice: 400, productDescription: "Description" },
    { productId: 8, productQuantity: 1, productSubTotalPrice: 450, productName: "ghi", isAddedtoCart: false, productImage: "/assets/images/test2.jpg", productPrice: 450, productDescription: "Description" },
    { productId: 9, productQuantity: 1, productSubTotalPrice: 500, productName: "jkl", isAddedtoCart: false, productImage: "/assets/images/test4.jpg", productPrice: 500, productDescription: "Description" },
    { productId: 10, productQuantity: 1, productSubTotalPrice: 550, productName: "mno", isAddedtoCart: false, productImage: "/assets/images/test5.png", productPrice: 550, productDescription: "Description" },
    { productId: 11, productQuantity: 1, productSubTotalPrice: 600, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 600, productDescription: "Description" },
    { productId: 12, productQuantity: 1, productSubTotalPrice: 650, productName: "def", isAddedtoCart: false, productImage: "/assets/images/unnamed.gif", productPrice: 650, productDescription: "Description" },
    { productId: 13, productQuantity: 1, productSubTotalPrice: 700, productName: "ghi", isAddedtoCart: false, productImage: "/assets/images/test2.jpg", productPrice: 700, productDescription: "Description" },
    { productId: 14, productQuantity: 1, productSubTotalPrice: 750, productName: "jkl", isAddedtoCart: false, productImage: "/assets/images/test4.jpg", productPrice: 750, productDescription: "Description" },
    { productId: 15, productQuantity: 1, productSubTotalPrice: 800, productName: "mno", isAddedtoCart: false, productImage: "/assets/images/test5.png", productPrice: 800, productDescription: "Description" },
    { productId: 16, productQuantity: 1, productSubTotalPrice: 850, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 850, productDescription: "Description" },
    { productId: 17, productQuantity: 1, productSubTotalPrice: 550, productName: "mno", isAddedtoCart: false, productImage: "/assets/images/test5.png", productPrice: 550, productDescription: "Description" },
    { productId: 18, productQuantity: 1, productSubTotalPrice: 600, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 600, productDescription: "Description" },
    { productId: 19, productQuantity: 1, productSubTotalPrice: 650, productName: "def", isAddedtoCart: false, productImage: "/assets/images/unnamed.gif", productPrice: 650, productDescription: "Description" },
    { productId: 20, productQuantity: 1, productSubTotalPrice: 700, productName: "ghi", isAddedtoCart: false, productImage: "/assets/images/test2.jpg", productPrice: 700, productDescription: "Description" },
    { productId: 21, productQuantity: 1, productSubTotalPrice: 750, productName: "jkl", isAddedtoCart: false, productImage: "/assets/images/test4.jpg", productPrice: 750, productDescription: "Description" },
    { productId: 22, productQuantity: 1, productSubTotalPrice: 800, productName: "mno", isAddedtoCart: false, productImage: "/assets/images/test5.png", productPrice: 800, productDescription: "Description" },
    { productId: 23, productQuantity: 1, productSubTotalPrice: 850, productName: "abc", isAddedtoCart: false, productImage: "/assets/images/test3.jpg", productPrice: 850, productDescription: "Description" },
  ];
  isHome = true;
  displayedColumns: string[] = ['Name', 'productPrice', 'productSubTotalPrice', 'Description', 'Image', 'actions'];
  dataSource;
  model = new Model();
  cartList: Model[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addToCart(item) {
    this.items.forEach(rec => {
      if (rec.productId == item.productId)
        rec.isAddedtoCart = true;
    });
    if (this.cartList == undefined) {
      this.cartList = [];
      this.cartList.push(item);
      this.dataSource = new MatTableDataSource(this.cartList);
    } else {
      this.cartList.splice(0, 0, item);
      this.dataSource = new MatTableDataSource(this.cartList);
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  removeFromCart(produttId) {
    this.items.forEach(rec => {
      if (rec.productId == produttId)
        rec.isAddedtoCart = false;
    });
    this.cartList.forEach((cartItem, index) => {
      if (cartItem.productId == produttId) {
        this.cartList.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.cartList);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  decressQuantity(productId) {
    this.cartList.forEach(cartItem => {
      if (cartItem.productId == productId) {
        cartItem.productQuantity = cartItem.productQuantity - 1;
        if (cartItem.productQuantity < 1)
          cartItem.productQuantity = 1
      }
      cartItem.productSubTotalPrice = cartItem.productPrice * cartItem.productQuantity;
    });
  }

  incressQuantity(productId) {
    this.cartList.forEach(cartItem => {
      if (cartItem.productId == productId) {
        cartItem.productQuantity = cartItem.productQuantity + 1;
        cartItem.productSubTotalPrice = cartItem.productPrice * cartItem.productQuantity;
      }
    });
  }
}

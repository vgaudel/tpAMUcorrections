import { AfterViewInit, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduit } from '../../model/IProduit';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatSort, MatSortHeader } from '@angular/material/sort';

@Component({
  selector: 'app-product-api',
  imports: [MatButton, CommonModule, MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSort, MatSortHeader],
  templateUrl: './product-api.html',
  styleUrl: './product-api.scss',
})
export class ProductApi implements OnInit, AfterViewInit{

  productService = inject(ProductService);

  products = new MatTableDataSource<IProduit>([]);
  errorMessage = signal('');

  //Partie spécifique à mat-table
  colonnesAffichees = ['name', 'description', 'price', 'category', 'stock', 'action'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //Fin

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit() : void {
    this.products.sort = this.sort;
    this.products.paginator = this.paginator;
  }

  loadProducts():void {
    this.productService.getAllProducts$().subscribe({
      next : (products) => {
        this.products.data = products;
        this.errorMessage.set('');
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits',error);
        this.errorMessage.set('Impossible de charger les produits depuis l\'API');
      }
    });
  }

  deleteProduct(product : IProduit) : void {
    const confirmation = confirm("Voulez-vous supprimer le produit " + product.name + "?");
    if(!confirmation){
      return;
    }
    this.productService.deleteProductById$(product.id).subscribe({
      next : (response) =>{
        console.log(response.message);
        this.products.data = this.products.data.filter(p => p.id!== product.id);
        //this.loadProducts();
      },
      error: (error) => {
        console.error('Erreur lors de la suppression du produit', error);
        this.errorMessage.set("La suppression du produit a échoué");
      }
    });
  }
}

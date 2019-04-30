import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../providers/category/category.provider';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // categories: Category[]
  categories: any[];

  constructor(private categoriesService: CategoryService) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

}

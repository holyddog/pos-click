import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'POS Market';
    categories: any[];

    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        this.categoryService.list()
            .then((data: any) => {
                if (data.result == "SUCCESS") {
                    this.categories = data.data.marketplaceCategories;
                }
            });
    }

    menu() {
        $('aside').addClass('active');

        setTimeout(function () {
            $(document).bind('click', (e: any) => {
                if (!$(e.target).closest('aside').length) {
                    $(document).unbind('click');
                    $('aside').removeClass('active');
                }
            });
        }, 0);
    }
}

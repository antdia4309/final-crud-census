import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Census:any = [];
 
  constructor(private crudService: CrudService, private router: Router) { }
 
  ngOnInit(): void {
    this.crudService.GetCensus().subscribe(res => {
      console.log(res)
      this.Census =res;
    });
  }

  onEdit(id: string): void {
    console.log('Navigating to edit page with census ID:', id);
    this.router.navigate(['/edit-census', id]);
  }

  onDelete(id: any): any {
    this.crudService.DeleteCensus(id)
      .subscribe(res => {
        console.log(res)
      })
      location.reload();
  }
}

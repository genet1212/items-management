
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import{MatTableDataSource, MatTableModule} from '@angular/material/table'
import { Items } from '../items';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule,MatSortModule,MatPaginatorModule],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})
export class HomeComponent {

  content?: string;
  constructor (private userService: UserService, private itemService: ItemsService) { }
 
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
  }



import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatButtonModule} from '@angular/material/button'
import{MatTableDataSource, MatTableModule} from '@angular/material/table'
import { Items } from '../items';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatTableModule,MatSortModule,MatPaginatorModule],
  templateUrl: './home.component.html', 
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  displayedColumns = ['id', 'name', 'price', 'quantity','description'];
  dataSource = new MatTableDataSource<Items>();
  content?: string;
  constructor (private userService: UserService, private itemService: ItemsService) { }


  items:Items[]=[];
  filteredItems:Items[]=[];
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;
 

  ngAfterViewInit(): void{
    this.itemService.fetchAllItems().subscribe((data)=>{
      this.items=data;
     this.dataSource = new MatTableDataSource<Items>(data);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    })

    }

  serchItems(input:any){
        this.filteredItems=this.items.filter(item=>item.name.toLowerCase().includes(input.toLowerCase())
         || item.price.toString().includes(input)
        || item.quantity.toString().includes(input)
      || item.description.toLowerCase().includes(input.toLowerCase()));

      this.dataSource = new MatTableDataSource<Items>(this.filteredItems);
  }

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


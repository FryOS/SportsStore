import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
import { AuthComponent } from './admin/auth/auth.component';

@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: 'cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: '**', redirectTo: '/store' }
    ])],
  providers: [StoreFirstGuard],
  declarations: [AppComponent, AuthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

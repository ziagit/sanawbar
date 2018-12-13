import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacebookService, InitParams } from 'ngx-facebook';
@Injectable({
  providedIn: 'root'
})
export class ShopifyErpnextService {

  username = "shopify app id";
  password = "shopify app secret";
  encoded = btoa(this.username + ":" + this.password);

  constructor(public http: HttpClient, private fb: FacebookService) {
    let initParams: InitParams = {
      appId: 'facebook app id',
      xfbml: true,
      version: 'v3.1'
    };
    fb.init(initParams);
  }

  getItemERPNext(id) {
    return this.http.get('/erpnext/api/resource/Item/?fields=["item_code","item_name"]&filters=[["item_name","=","' + id + '"]]');
  }
  postItemERPNext(item) {
    return this.http.post('/erpnext/api/resource/Item', item);
  }
  postOrderERPNext(order) {
    return this.http.post('/erpnext/api/resource/Sales Order', order);
  }
  getOrderERPNext(order_no) {
    return this.http.get('/erpnext/api/resource/Sales Order/?filters=[["parent","=","' + order_no + '"]]');
  }
  postCustomerERPNext(customer) {
    return this.http.post('/erpnext/api/resource/Customer', customer);
  }
  postAddressERPNext(address) {
    return this.http.post('/erpnext/api/resource/Address', address);
  }
  getCustomerERPNext(customer) {
    return this.http.get('/erpnext/api/resource/Customer/?filters=[["customer_name","=","' + customer + '"]]');
  }
  getAddressERPNext(address) {
    return this.http.get('/erpnext/api/resource/Address/?filters=[["address_title","=","' + address + '"]]');
  }
  getOrderShopify() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.get('/shopify/admin/orders.json', { headers });
  }
  getCustomerShopify() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.get('/shopify/admin/customers.json', { headers });
  }

}

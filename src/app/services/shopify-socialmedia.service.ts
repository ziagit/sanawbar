import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacebookService, InitParams } from 'ngx-facebook';
import { collectionsId } from '../services/static-data';
@Injectable({
  providedIn: 'root'
})
export class ShopifySocialmediaService {

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

  postItemShopify(item) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.post('/shopify/admin/products.json', item, { headers });
  }

  buy(order) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.post("/shopify/admin/products.json", order, { headers });
  }


  getProductShopify(id) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.get("/shopify/admin/products.json?collection_id=" + id, { headers })
  }

  getCollectionShopify() {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${this.encoded}`,
    });
    return this.http.get("/shopify/admin/smart_collections.json?ids=" + collectionsId.map(this.arrayExtractor), { headers });
  }

  arrayExtractor(data) {
    return data.col_id;
  }
  shareToFacebook(product, imageUlr) {
    const access_token = 'facebook app token';
    return this.fb.api('https://graph.facebook.com/1577703765647439/photos', 'post',
      {
        access_token: access_token,
        message: product.title,
        source: imageUlr,
      })
  }

  shareToTwitter() {
    const key = '0lxPjMVD0lAeIyT0jXBY897XO';
    const secret = 'VhrDuaE287mhmq4q049sWenYKEc5aO8DAe8C9DTx5ytcBhOmom';
    const encoded = btoa(key + ':' + secret);
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${encoded}`,
    });

    return this.http.get('/twitter/list')
  }

  shareToPinterest(data) {
    const access_token = 'AvhkEKDZ38DzPZR3Y0gI7_r5H_nXFVr3MgT7GDVFQ3-IcuB_SwhRADAAATbVRUOPLT5AbkkAAAAA';
    return this.http.post('/pinterest/v1/pins/?access_token=' + access_token, data)
  }
  loginWithPinterest() {
    return this.http.get('/pinterest/oauth/?response_type="AvhkEKDZ38DzPZR3Y0gI7_r5H_nXFVr3MgT7GDVFQ3-IcuB_SwhRADAAATbVRUOPLT5AbkkAAAAA"&redirect_uri="https://6bfa251a.ngrok.io/&client_id="4990973036076236619"&scope=read_public,write_public&state=""')
  }
}

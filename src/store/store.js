import {observable,action} from 'mobx'

class ListStore{
  @observable list = [];
  @action add(v){
    this.list.push(v)
    console.log(this.list);
  }
  @action del(i){
    this.list.splice(i,1)
  }
}
export default ListStore


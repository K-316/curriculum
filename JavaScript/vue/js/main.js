var app = new Vue({
  el: "#app",
  data: {
      //newItemを空の状態で用意する。
      newItem: '',
      items: ['item1', 'item2', 'item3']
  },
  methods: {
    addItem: function() {
        //data内のデータにはthisでアクセスできます
        this.items.push(this.newItem);
    }
});
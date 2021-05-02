import $ from 'jquery';

const AddCart = (skuID, cb) => {
  $.ajax({
    url: '/cart',
    type: 'POST',
    data: {
      sku_id: skuID,
    },
    success: (data) => cb(data),
  });
};

export default AddCart;

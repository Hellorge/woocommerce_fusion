frappe.listview_settings["WooCommerce Order"] = {
	
	onload: function (listview) {
		listview.page.add_action_item(__("Sync this Order to ERPNext"), () => {
            frappe.call({
                method: "woocommerce_fusion.woocommmerce_order.sync_sales_order",
                args: {
                    orders: selectedOrders.map((order)=> order.name)
                },
                callback: function(r){
                    console.log("testing")
                    if (r.message){
                        listview.refresh();
                    }
                }
            })
		});

	},
};

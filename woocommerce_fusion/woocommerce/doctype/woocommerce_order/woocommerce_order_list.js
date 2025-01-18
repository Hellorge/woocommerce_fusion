frappe.listview_settings["WooCommerce Order"] = {
	
	onload: function (listview) {
		listview.page.add_action_item(__("Sync Order with GrowthSystem"), () => {
            var selectedOrders = listview.get_checked_items();
            var orders = selectedOrders.map(order=> order.name)
            frappe.call({
                method: "woocommerce_fusion.tasks.sync_sales_orders.run_so_sync",
                args: {
                    woo_orders: orders,
                },
                callback: function(r){
                    console.log("testing")
                    if (r.message){
                        listview.refresh();
                        frappe.dom.unfreeze();
                        frappe.show_alert({
                            message: __('Sync completed Successfully'),
                            indicator: 'green',
                        }, 5);
                        frm.reload_doc();
                    }
                }
            })
		});

	},
};

import React, { useMemo, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Datatable from 'components/React/Datatable/Datatable';
import { RootState } from 'store/root-reducer'
import { addItem, removeItem, deleteItem } from 'store/modules/product/cartAction';
import { Row } from 'react-table';
import toast from './../../../components/React/ToastNotifier/ToastNotifier';

interface ProductProps extends PropsFromRedux { }

const Cart = (props: ProductProps) => {
  const { allCartData, totalPriceData, deleteItem,addItem,removeItem } = props;
  const history = useHistory();

  const handleDelete = (id: any) => {
    deleteItem(id)
    toast.success("Product Removed Sucessfully")
  }

  const columns = useMemo(() => [
    { Header: "S.N", Cell: ({ row: { index } }: { row: Row }) => index + 1 },
    { Header: "Product Name", accessor: "name" },

    {
      Header: "Quantity", accessor: "quantity", Cell: ({ row }: { row: Row<{ id: number }> }) => (
        <ul className="list list__inline">
          <li onClick={() => addItem(row.original)}>
              +
          </li>
          <li>
            {row.original.quantity}
          </li>
          <li onClick={() => removeItem(row.original)}>
              -
          </li>
        </ul>
      )
    },
    { Header: "Amount (In Rs)", id: 'price', accessor: (row) => row.price * row.quantity },
    {
      Header: "Actions", headerClass: 'text-right', accessor: "actions", Cell: ({ row }: { row: Row<{ id: number }> }) => (
        <ul className="list list__inline">
          <li>
            <button title="Remove Item" className="btn btn-icon-only" onClick={() => handleDelete(row.original._id)}>
            Remove
            </button>
          </li>
        </ul>
      )
    }
  ], [])

  return (
    <div className="container">
      <h4 className="text-center">Your Items{console.log(allCartData)}</h4>
      <div className="row">
        <div className="col-lg-8 offset-md-2">
          <div className="align-vertical justify-content-between mb-2 border-top pt-3">
            <div className="align-vertical ml-auto">
              <button className="btn btn-primary d-flex align-items-center" onClick={() => history.push('/product')}>
                <span>Back</span>
              </button>
            </div>
          </div>
          <Datatable columns={columns} data={allCartData || []} />
        </div>
        <div className="col-lg-8 offset-md-2">
          <div className="d-flex justify-content-end">
            <span>Total Amount: Rs {totalPriceData}</span>
          </div>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = (state: any) => ({
  allCartData: state.product?.cartProducts?.cartItems || [],
  totalPriceData: state.product?.cartProducts?.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  ) || 0
})

const mapDispatchToProps = {
  addItem,
  removeItem,
  deleteItem
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Cart)
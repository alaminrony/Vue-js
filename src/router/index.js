import ItemDetails from '../components/view/ItemDetails.vue'
import Test from '../components/view/Test.vue'
import Inventory from '../components/view/Test.vue'

export const routes = [
    {
      path : '',
      component : Inventory
    },
    {
      path : '/item/:id',
      component : ItemDetails
    }
]
import { useState } from 'react'
import axios from 'axios'
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
      })
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const res = await axios.post('https://inventory-kanc.onrender.com/create', 
            formData,
            { withCredentials: true }
          )
          console.log(res.data) 
          alert('done')
        } catch (error) {
          console.error('Error submitting form:', error)
        }
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="name" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          <input 
            type="text" 
            name="description" 
            placeholder="description" 
            value={formData.description} 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          <input 
            type="text" 
            name="price" 
            placeholder="price" 
            value={formData.price} 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          <input 
            type="text" 
            name="quantity" 
            placeholder="quantity" 
            value={formData.quantity} 
            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          />
          <input type="submit" />
        </form>
      )
    }

export default Form

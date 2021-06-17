import axios from 'axios';

const url = 'http://localhost:5000';

export async function showDoctor(values) {
    try {
        const response = await axios.post(`${url}/myproduct/show`, values);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

// admin part
export async function createProduct(product) {
    try {
        const response = await axios.post(`${url}/product/create`, product);
        const data = response.data;
        if (data.product) {
            return { data: data.product };
        }
        if (data.errors) {
            const error = data.errors.name;
            return { error };
        }
    } catch (error) {
        console.log(error);
    }
}

export async function destroyProduct(product) {
    try {
        const response = await axios.post(`${url}/product/destroy`, product);
        const data = response.data;
        if (data.product) {
            return { data: data.product };
        }
        if (data.errors) {
            const error = data.errors;
            return { error };
        }
    } catch (error) {
        console.log(error.message);
    }
}

export async function showSellerProducts(sellerId) {
    try {
        const response = await axios.post(`${url}/product/showAll`, { sellerId });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
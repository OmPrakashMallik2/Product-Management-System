package product.management.ProductManagementBackend.Services;

import product.management.ProductManagementBackend.Models.Product;

import java.util.List;

public interface ProductService {
    public Product createProduct(Product product);
    public Product readSingleProduct(Integer id);
    public List<Product> readAllProducts();
    public Product updateProduct(Product product, Integer id);
    public String deleteProduct(Integer id);
}

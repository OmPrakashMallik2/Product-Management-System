package product.management.ProductManagementBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import product.management.ProductManagementBackend.Models.Product;
import product.management.ProductManagementBackend.Services.ProductService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    ProductService productService;


    @GetMapping("/")
    public String home() {
        return "project is running";
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.readAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getSingleProduct(@PathVariable Integer id) {
        return productService.readSingleProduct(id);
    }

    @PostMapping("/product")
    public Product addProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable Integer id) {
        return productService.updateProduct(product, id);
    }

    @DeleteMapping("/products/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        return productService.deleteProduct(id);
    }

}

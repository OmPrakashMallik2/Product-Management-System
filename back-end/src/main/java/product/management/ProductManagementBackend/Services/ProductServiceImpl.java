package product.management.ProductManagementBackend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import product.management.ProductManagementBackend.Models.Product;
import product.management.ProductManagementBackend.Repositories.ProductRepository;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product readSingleProduct(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public List<Product> readAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product updateProduct(Product product, Integer id) {
        Product oldProduct = productRepository.findById(id).get();
        if (product.getName() != null) {
            oldProduct.setName(product.getName());
        }
        if (product.getDescription() != null) {
            oldProduct.setDescription(product.getDescription());
        }
        if (product.getPrice() != null) {
            oldProduct.setPrice(product.getPrice());
        }
        if (product.getStatus() != null) {
            oldProduct.setStatus(product.getStatus());
        }

        if (product.getImageLink() != null) {
            oldProduct.setImageLink(product.getImageLink());
        }
        return productRepository.save(oldProduct);
    }

    @Override
    public String deleteProduct(Integer id) {
        Product product = productRepository.findById(id).get();
        productRepository.delete(product);

        return "deleted successfully";
    }
}

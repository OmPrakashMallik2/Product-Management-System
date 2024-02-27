package product.management.ProductManagementBackend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import product.management.ProductManagementBackend.Models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}

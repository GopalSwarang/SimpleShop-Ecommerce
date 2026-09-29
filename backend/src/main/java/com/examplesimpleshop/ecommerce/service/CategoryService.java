package com.examplesimpleshop.ecommerce.service;

import com.examplesimpleshop.ecommerce.entity.Category;
import com.examplesimpleshop.ecommerce.repository.CategoryRepository;
import com.examplesimpleshop.ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    public CategoryService(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    public Category getById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Category not found with id: " + id));
    }

    public Category create(Category category) {
        if (categoryRepository.existsByNameIgnoreCase(category.getName())) {
            throw new IllegalArgumentException("Category name already exists.");
        }
        return categoryRepository.save(category);
    }

    public Category update(Long id, Category input) {
        Category category = getById(id);
        category.setName(input.getName());
        category.setDescription(input.getDescription());
        return categoryRepository.save(category);
    }

    public void delete(Long id) {
        if (productRepository.existsByCategoryId(id)) {
            throw new IllegalArgumentException("Cannot delete a category that still has products.");
        }
        Category category = getById(id);
        categoryRepository.delete(category);
    }
}

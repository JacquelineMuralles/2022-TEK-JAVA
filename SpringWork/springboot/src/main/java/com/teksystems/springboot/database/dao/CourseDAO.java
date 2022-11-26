package com.teksystems.springboot.database.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.teksystems.springboot.database.entity.Course;

public interface CourseDAO  extends JpaRepository<Course, Long> {
	
	@Query("SELECT c FROM Course c where c.name = :name")
	public List<Course> findByCourseName(String name);
	
	public List<Course> findByNameContaining(String name);
	
	public Course findByNameAndId(String name, Integer id);
	
	public List<Course> findByNameContainingIgnoreCase(String name);
	
	public List<Course> findByNameContainingIgnoreCaseOrderByNameDesc(String name);
	
	public List<Course> findByNameContainingIgnoreCaseOrderByNameAsc(String name);
	
//	public List<Course> findByNameContainingIgnoreCaseOrFindByInstructorContainingIgnoreCase(String name, String instructor);
//	
//	public List<Course> findByNameOrFindByInstructorContainingIgnoreCase(String name, String instructor);
	
	public List<Course> findByNameOrInstructor(String name, String instructor);
	
	public List<Course> findByNameOrInstructorContainingIgnoreCase(String name, String Instructor);

	public Course findById(Integer id);
}

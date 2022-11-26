package com.teksystems.springboot.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.teksystems.springboot.database.dao.CourseDAO;
import com.teksystems.springboot.database.entity.Course;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class IndexController {
	
	@Autowired
	private CourseDAO courseDao;
	
	//search by instructor name
	//add an additional field to the jsp page to take in the instructor name.
	//put it in the same form that already exists and give the input box a different name
	// create a DAO method to search by instructor name. 
	//Maybe do something fancy to allow finding any string in the instruct name value ..using one of the spring data functions. 
	//to the controller ..add another parameter that will take in the instructor name
	//add the instructor name to the model so you can display again on the page after submit
	//query your list of courses and display them below. 
	//Bonus: make a single query that can search by course name or instructor name. 
	
	@RequestMapping(value = {"/", "/index", "/index.html"}, method = RequestMethod.GET)
	public ModelAndView slash(@RequestParam(required = false) String search, @RequestParam(required = false) String searchInstructor) {
		
		System.out.println("Search parameter to page: " + search);
		ModelAndView response = new ModelAndView();
		response.setViewName("index");
		
		response.addObject("search", search);
		
		response.addObject("searchInstructor", searchInstructor);
		
		response.addObject("name", "Jackie");
		
//		System.out.println("Index controller request");
		System.out.println(search + " " + searchInstructor);
//		
		
		
			List<Course> courses = courseDao.findByNameOrInstructorContainingIgnoreCase(search, searchInstructor);
			for(Course c : courses) {
				System.out.println(c.getName() + " " + c.getInstructor());
			}
			response.addObject("courses", courses);
		
		
//		for(Course c : courses) {
//			System.out.println(c.getName());
//		}
		
		
		return response;
	}

	
	@RequestMapping(value = {"/search"}, method = RequestMethod.GET)
	public ModelAndView search() {
		System.out.println("Index controller search request");
		
		return null;
	}
	
	@RequestMapping(value = {"/course"}, method = RequestMethod.GET)
	public ModelAndView course() {
		log.info("Index controller course request method");
		
		ModelAndView response = new ModelAndView();
		response.setViewName("course");
		
		return response;
	}
	
	//MVC controller - response body
	@RequestMapping(value = {"/courseSubmit"}, method = RequestMethod.GET)
	public ModelAndView courseSubmit(@RequestParam(required = false) String courseName, @RequestParam(required = false) String instructor) {
		log.info("Index controller course submit method");
		
		
		ModelAndView response = new ModelAndView();
		response.setViewName("course");
		
		log.info("Index controller course submit method");
		log.info("Course Submit : courseName     : " + courseName);
		log.info("Course Submit : instructorName : " + instructor);

		//change this error msg to list of strings
		//add the error msg list to the model
		//fix the JSP page to use a lop inside the if statement to show errors on the pg
		List<String> errormessages = new ArrayList<>();
		
		if (courseName == null || courseName.equals("")) {
			errormessages.add("The course name can not be empty ");
		}

		if (instructor == null || instructor.equals("")) {
			errormessages.add("The instructor name can not be empty");
		}

		if (!errormessages.isEmpty()) {
			// there is an error
			for(String error : errormessages) {
				log.info(error);
			}
			response.addObject("error", errormessages);
			
		} else {
			Course course = new Course();
			course.setName(courseName);
			course.setInstructor(instructor);

			courseDao.save(course);
		}
		
		return response;
	}
	
	//REST controller response - no response body
	@ResponseBody
	@RequestMapping(value = {"/course/path/{id}"}, method = RequestMethod.GET)
	public Course pathVar(@PathVariable Integer id, HttpSession session) {
		log.info("Incoming path variable = " + id);
		
		Course c = courseDao.findById(id);
		log.info("Course name: " + c.getName() + " Instructor: " + c.getInstructor());
		
		if( session.getAttribute("key") == null) {
			log.info("Key not found in session");
			session.setAttribute("key", "value");
		} else {
			log.info("Key is in the session");
		}
		
		//returns JSON object of id entered. 
		return c;
	}
	
}

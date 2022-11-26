package com.teksystems.springboot.database.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
//connect using mysql table name
@Table(name="student")
public class Student {
	//name="id" is database name
	//private Integer id is whatever you choose
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	@EqualsAndHashCode.Include
	@ToString.Include
	private Integer id;

	@Column(name="first_name")
	@EqualsAndHashCode.Include
	@ToString.Include
	private String firstName;
	
	@Column(name="last_name")
	@EqualsAndHashCode.Include
	@ToString.Include
	private String lastName;
	
	@Column(name="city")
	@EqualsAndHashCode.Include
	@ToString.Include
	private String city;
	
	@Column(name="state")
	@EqualsAndHashCode.Include
	@ToString.Include
	private String state;
	
	@Column(name="zip")
	@EqualsAndHashCode.Include
	@ToString.Include
	private Integer zip;
	
	
}

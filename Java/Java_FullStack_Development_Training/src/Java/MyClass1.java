package Java;

//Class and Object
class Employee {
	//Variable
	int employeeId;
	String employeeName;
	float employeeSalary;
	
	//Constructor
	Employee(int employeeId, String employeeName, float employeeSalary){
		this.employeeId =employeeId;
		this.employeeName =employeeName;
		this.employeeSalary=employeeSalary;
	}
	
	//Method
	void display() {
		System.out.println("Employee Id :"+ employeeId);
		System.out.println("Employee Name :"+ employeeName);
		System.out.println("Employee Salary :"+ employeeSalary);
	}
}
public class MyClass1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee emp1= new Employee(101, "Valan", 2000.0f);
		emp1.display();   
		
		Employee emp2= new Employee(102, "Kumar", 3000.0f);
		emp2.display();

	}

}

package Java;
import java.util.Scanner;
public class Random_Number {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner (System.in);
		int min=sc.nextInt();
		int max=sc.nextInt();
		int range=(max-min)+1;
			System.out.println(Math.random()*range);
	}

}

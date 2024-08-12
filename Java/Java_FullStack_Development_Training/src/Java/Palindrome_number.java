package Java;
import java.util.Scanner;
public class Palindrome_number {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int m=n;
		int sum=0;
		while(n!=0)
		{
			int rev=n%10;
			sum=sum*10+rev;
			n/=10;
		}
		System.out.print(sum);
		if(m==sum)
		{
			System.out.print(" is a Palindrome.");
		}
		else {
			System.out.print(" is not a Palindrome.");
		}
	}

}

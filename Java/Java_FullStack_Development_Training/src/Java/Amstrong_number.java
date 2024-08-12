package Java;
import java.util.Scanner;
public class Amstrong_number {
	public static void main(String[]args) {
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int num=n;
		int num1=n;
		int count=0;
		while(num!=0) {
			num=num/10;
			++count;
		}
		//System.out.println(count);
		int sum=0;
		while(n!=0)
		{
			int rev=n%10;
			sum+=Math.pow(rev,count);
			n/=10;
		}
		System.out.println(sum);
		if(sum==num1)
		{
			System.out.println(num1+" is a Amstrong Number.");
		}
		else
		{
			System.out.println(num1+" is not a Amstrong Number.");
		}
	}
}

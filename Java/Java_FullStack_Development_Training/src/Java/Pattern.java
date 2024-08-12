package Java;
import java.util.Scanner;
public class Pattern {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int a[][]=new int [n][n];
		for(int i=0;i<=n;i++)
		{
			for(int j=i+1;j<=n;j++) {
				System.out.print("* ");
			}
			System.out.println();
		}
		
		
	}

}

import java.applet.*;
import java.awt.*;
import java.awt.event.*;

public class LargestNumberApplet extends Applet implements ActionListener {
    private TextField textField1, textField2, textField3;
    private Button button;
    private Label resultLabel;

    public void init() {
        // create three text fields
        textField1 = new TextField(10);
        textField2 = new TextField(10);
        textField3 = new TextField(10);

        // create a button
        button = new Button("Find Largest");

        // create a label to display the result
        resultLabel = new Label("");

        // add components to the applet
        add(new Label("Enter three numbers:"));
        add(textField1);
        add(textField2);
        add(textField3);
        add(button);
        add(resultLabel);

        // register the button for action events
        button.addActionListener(this);
    }

    public void actionPerformed(ActionEvent e) {
        // get the three numbers from the text fields
        int num1 = Integer.parseInt(textField1.getText());
        int num2 = Integer.parseInt(textField2.getText());
        int num3 = Integer.parseInt(textField3.getText());

        // find the largest number
        int largest = Math.max(num1, Math.max(num2, num3));

        // display the result
        resultLabel.setText("The largest number is: " + largest);
    }
}

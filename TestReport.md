# Documentation for the test-cases

| Test | Type of test | Status | Description | Comment |
|------|--------------|--------|-------------|---------|
| **TC1** | Unit test (jest) | √ | Checks if the custom element `my-board` has a canvas element. | First test to verify Jest and Babel config works, and to ensure `my-board` contains the correct elements. |
| **TC2** | Unit test (jest) | √ | Checks if the custom element `my-board` has the toolbar. | Similar to **TC1**, but checks for the div with id `toolBar` instead of the canvas. |
| **TC3** | Manual test | √ | Makes sure that the eraser clears the pixels off the canvas. | This is a manual test case that you test by following the instructions below at the **Test Specification for Manual test cases**. |
| **TC4** | Manual test | √ | Makes sure that the user can change the size of the board via two input fields. | This is a manual test case that you can test by following the instructions below at the **Test Specification for Manual test cases** section. |


# What has been tested?
The first thing that I tested was the structure of the customelement **my-board**. I have unit tests that basically checks that the customelement has the correct structure. This was the first thing that I tested because I wanted to make sure that my jest and babel configration was working.

# How was it tested?

# Testresult

## Test Specification for Manual test cases

### TC3 Test the Eraser tool
**Use Case:** Remove pixels from the canvas using the eraser tool

**Scenario:** Erase a painted area successfully

**Test Steps:**
1. Select the **pen tool** from the toolbar.
2. Pick any color and paint a square on the canvas.
3. Switch to the **eraser tool** and attempt to erase the square you just painted.

**Expected Results:**
1. The pixels of the square should be removed.  
2. No trace of the square should remain visible.
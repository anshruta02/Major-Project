<?php
// Start the session
session_start();

// Check if the user is already logged in
if (isset($_SESSION['email'])) {
  header('Location: home.php');
  exit();
}

// Check if the login form was submitted
if (isset($_POST['email']) && isset($_POST['password'])) {
  // TODO: Add code to validate the login credentials
  // For now, we'll just set the session variable and redirect to the home page
  $_SESSION['email'] = $_POST['email'];
  header('Location: home.php');
  exit();
}

// Check if the sign up form was submitted
if (isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['password'])) 
  // TODO: Add code to insert the user into the database
  // For now

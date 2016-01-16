require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Home | Daini Sani"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | Daini Sani"
  end

  test "should get work" do
    get :work
    assert_response :success
    assert_select "title", "Work | Daini Sani"
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "Contact | Daini Sani"
  end

end




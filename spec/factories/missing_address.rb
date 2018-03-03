FactoryGirl.define do
    factory  :missing_address, parent: :restaurant do
      address nil
    end
  end

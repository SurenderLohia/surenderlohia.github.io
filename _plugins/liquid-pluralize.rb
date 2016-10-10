# pluralize
#
# A Liquid filter to make it easy to form correct plurals.
#
# https://github.com/bdesham/pluralize
module Jekyll
  module Pluralize
    def pluralize(number, singular, plural = nil)
      #number = Integer(number) || 0
      if number == 1
        "#{singular}"
      elsif plural.nil?
        "#{singular}s"
      else
        "#{plural}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::Pluralize)
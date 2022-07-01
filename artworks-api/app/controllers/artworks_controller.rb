class ArtworksController < ApplicationController

    require 'uri'
    require 'net/http'
    require 'json'
    
    def index
        uri = URI('https://api.artic.edu/api/v1/artworks')
        params = { :limit => 10, :page => artwork_params[:page], :fields => 'id,title,image_id,artist_id,artist_title' }
        uri.query = URI.encode_www_form(params)
        response = Net::HTTP.get_response(uri)
        
        object = JSON.parse(response.body)

        artworks = []
        for artwork in object['data']
            if !artwork['image_id'].nil?
                artwork['image_url'] = 'https://lakeimagesweb.artic.edu/iiif/2/' + artwork['image_id'] + '/full/843,/0/default.jpg'
            end
            artworks.append(artwork)
        end
        
        render json: {
            pagination: object['pagination'],
            artworks: artworks
        }
    end

    def artwork_params
        params.permit(:page)
    end
end
